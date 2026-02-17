import React, { useEffect, useRef } from 'react';

const HERO_VIDEO_URL =
  'https://customer-leo8lubv91ct4vwd.cloudflarestream.com/2c61732cfa203dba59d6552980536a41/manifest/video.m3u8';

const HLS_SCRIPT_ID = 'hls-js-cdn-script';

const loadHlsLibrary = () =>
  new Promise((resolve, reject) => {
    if (window.Hls) {
      resolve(window.Hls);
      return;
    }

    const existingScript = document.getElementById(HLS_SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.Hls));
      existingScript.addEventListener('error', () => reject(new Error('Failed to load hls.js')));
      return;
    }

    const script = document.createElement('script');
    script.id = HLS_SCRIPT_ID;
    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.20/dist/hls.min.js';
    script.async = true;
    script.onload = () => resolve(window.Hls);
    script.onerror = () => reject(new Error('Failed to load hls.js'));
    document.head.appendChild(script);
  });

const Hero = () => {
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;
    const cleanupFns = [];

    const setupVideo = async (video) => {
      if (!video) return;
      let hlsInstance = null;

      const restartFromStart = () => {
        if (!video) return;

        if (hlsInstance) {
          hlsInstance.stopLoad();
          hlsInstance.startLoad(0);
          video.currentTime = 0;
          video.play().catch(() => {});
          return;
        }

        video.src = HERO_VIDEO_URL;
        video.load();
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      const onEnded = () => restartFromStart();
      const nearEndWatcher = window.setInterval(() => {
        if (!video.duration || !Number.isFinite(video.duration)) return;
        if (video.currentTime >= video.duration - 0.15) restartFromStart();
      }, 400);

      video.addEventListener('ended', onEnded);
      cleanupFns.push(() => {
        video.removeEventListener('ended', onEnded);
        window.clearInterval(nearEndWatcher);
      });

      const supportsNativeHls =
        video.canPlayType('application/vnd.apple.mpegurl') ||
        video.canPlayType('application/x-mpegURL');

      if (supportsNativeHls) {
        video.src = HERO_VIDEO_URL;
        video.load();
        video.play().catch(() => {});
        return;
      }

      try {
        const Hls = await loadHlsLibrary();
        if (isCancelled || !video || !Hls || !Hls.isSupported()) return;

        const hls = new Hls();
        hlsInstance = hls;
        hls.loadSource(HERO_VIDEO_URL);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
        hls.on(Hls.Events.BUFFER_EOS, restartFromStart);

        cleanupFns.push(() => {
          hls.off(Hls.Events.BUFFER_EOS, restartFromStart);
          hls.destroy();
        });
      } catch (error) {
        // Keep silent and allow graceful fallback to poster/black background.
      }
    };

    setupVideo(mobileVideoRef.current);
    setupVideo(desktopVideoRef.current);

    return () => {
      isCancelled = true;
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <section>
      {/* Mobile Layout: video on top, text below */}
      <div className="md:hidden bg-white">
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            ref={mobileVideoRef}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="px-5 py-10 text-center">
          <h1 className="text-[36px] font-extrabold text-[#11181C] mb-5 leading-[1.05] uppercase tracking-tight">
            Western
            <br />
            <span>Neurological Associates</span>
          </h1>
          <p className="text-[#687076] text-lg leading-8 max-w-md mx-auto mb-8">
            Neurology and Sleep Specialist Providing Comprehensive, Patient-Centered Care
          </p>
          <a
            href="/services"
            className="inline-block bg-[#1299ED] hover:bg-[#1a7fe6] text-white font-medium px-8 py-4 rounded-lg transition"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Desktop Layout: text over video */}
      <div className="hidden md:flex relative min-h-[90vh] items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={desktopVideoRef}
          className="absolute inset-0 w-full h-full object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight uppercase tracking-tight">
            Western
            <br />
            <span>Neurological Associates</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            Neurology and Sleep Specialist Providing Comprehensive, Patient-Centered Care
          </p>
          <a
            href="/services"
            className="inline-block bg-[#1299ED] hover:bg-[#1a7fe6] text-white font-medium px-8 py-4 rounded-lg transition"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

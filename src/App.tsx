import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, MapPinIcon, StarIcon, ArrowRightIcon } from 'lucide-react';
export function App() {
  const [showPlans, setShowPlans] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    gallery: false,
    about: false,
    testimonials: false,
    plans: false,
    features: false,
    location: false
  });
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Navbar effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Reveal sections on scroll
      const sections = {
        gallery: document.getElementById('gallery')?.getBoundingClientRect(),
        about: document.getElementById('about')?.getBoundingClientRect(),
        testimonials: document.getElementById('testimonials')?.getBoundingClientRect(),
        plans: document.getElementById('plans-section')?.getBoundingClientRect(),
        features: document.getElementById('features')?.getBoundingClientRect(),
        location: document.getElementById('location')?.getBoundingClientRect()
      };
      const newVisibleSections = {
        ...visibleSections
      };
      Object.entries(sections).forEach(([key, rect]) => {
        if (rect && rect.top < window.innerHeight - 100) {
          newVisibleSections[key] = true;
        }
      });
      setVisibleSections(newVisibleSections);
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check initial visibility
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);
  return <div className="w-full min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation - Refined navbar */}
      <nav className={`py-6 px-6 md:px-10 fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.04)]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-2xl font-light tracking-[0.15em] transition-colors duration-500 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            HESTIA'S PALACE
          </div>
          <div className="hidden md:flex space-x-10">
            <a href="#home" className={`hover:text-amber-500 transition-colors duration-300 tracking-wide ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              Home
            </a>
            <a href="#gallery" className={`hover:text-amber-500 transition-colors duration-300 tracking-wide ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              Gallery
            </a>
            <a href="#about" className={`hover:text-amber-500 transition-colors duration-300 tracking-wide ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              About
            </a>
            <a href="#plans-section" className={`hover:text-amber-500 transition-colors duration-300 tracking-wide ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              Plans
            </a>
          </div>
          <button className="bg-amber-500 text-white px-8 py-2.5 rounded-full hover:bg-amber-600 transition-all duration-300 text-sm font-medium tracking-[0.1em] shadow-[0_4px_10px_rgba(245,158,11,0.25)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_5px_rgba(245,158,11,0.2)]">
            BOOK NOW
          </button>
        </div>
      </nav>
      {/* Hero Section - Refined hero */}
      <section id="home" className="relative h-screen w-full bg-cover bg-center flex items-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-extralight mb-8 text-center tracking-[0.2em]">
            HESTIA'S PALACE
          </h1>
          <div className="w-24 h-px bg-amber-400 mb-8 opacity-80"></div>
          <p className="text-xl md:text-2xl max-w-xl text-center font-light tracking-wider text-white/90">
            Redefining luxury in the heart of paradise
          </p>
          <div className="mt-14 flex flex-col sm:flex-row gap-5">
            <button className="bg-amber-500 text-white px-10 py-3.5 rounded-full hover:bg-amber-600 transition-all duration-300 text-sm tracking-[0.15em] font-medium shadow-[0_6px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_5px_rgba(245,158,11,0.2)]">
              EXPLORE ROOMS
            </button>
            <button className="bg-transparent text-white border border-white/70 px-10 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-sm tracking-[0.15em] font-medium hover:border-white hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:translate-y-0">
              VIRTUAL TOUR
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a href="#gallery" className="text-white/80 animate-bounce hover:text-white transition-colors duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>
      {/* Gallery Section - Refined gallery */}
      <section id="gallery" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extralight text-center mb-3 tracking-[0.15em] transition-opacity duration-700 ${visibleSections.gallery ? 'opacity-100' : 'opacity-0'}`}>
            EXPERIENCE LUXURY
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-16"></div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${visibleSections.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative overflow-hidden group h-80 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.07)]">
              <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Luxury Suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light text-white tracking-wide">
                    Presidential Suite
                  </h3>
                  <p className="text-sm text-white/80 mt-1 tracking-wide">
                    Unparalleled luxury with panoramic views
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group h-80 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.07)]">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Infinity Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light text-white tracking-wide">
                    Infinity Pool
                  </h3>
                  <p className="text-sm text-white/80 mt-1 tracking-wide">
                    Where the water meets the horizon
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group h-80 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.07)]">
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light text-white tracking-wide">
                    Gourmet Restaurant
                  </h3>
                  <p className="text-sm text-white/80 mt-1 tracking-wide">
                    Culinary excellence from world-class chefs
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group h-80 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.07)]">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Spa Treatment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light text-white tracking-wide">
                    Wellness Spa
                  </h3>
                  <p className="text-sm text-white/80 mt-1 tracking-wide">
                    Rejuvenate your body and mind
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group h-80 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.07)]">
              <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Lounge Bar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light text-white tracking-wide">
                    Skyline Bar
                  </h3>
                  <p className="text-sm text-white/80 mt-1 tracking-wide">
                    Signature cocktails with a view
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group h-80 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.07)]">
              <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Terrace View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light text-white tracking-wide">
                    Private Terrace
                  </h3>
                  <p className="text-sm text-white/80 mt-1 tracking-wide">
                    Exclusive outdoor relaxation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section - Refined about section */}
      <section id="about" className="py-24 px-6 md:px-10 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-extralight mb-3 tracking-[0.15em]">
                THE HESTIA EXPERIENCE
              </h2>
              <div className="w-16 h-px bg-amber-400 mb-10"></div>
              <p className="text-lg mb-8 leading-relaxed text-gray-700 font-light tracking-wide">
                Named after the Greek goddess of hearth and hospitality,
                Hestia's Palace embodies warmth and luxury in every detail. Our
                philosophy centers on providing an unforgettable experience that
                transcends traditional hospitality.
              </p>
              <p className="text-lg mb-10 leading-relaxed text-gray-700 font-light tracking-wide">
                Since 2010, we've welcomed guests from around the world to
                experience our unique blend of modern luxury and timeless
                elegance. Our dedicated team ensures that every moment of your
                stay exceeds expectations.
              </p>
              <div className="flex space-x-12 text-sm">
                <div>
                  <p className="text-4xl font-extralight text-amber-500 mb-2">
                    150+
                  </p>
                  <p className="text-gray-600 tracking-wide">Luxury Rooms</p>
                </div>
                <div>
                  <p className="text-4xl font-extralight text-amber-500 mb-2">
                    4
                  </p>
                  <p className="text-gray-600 tracking-wide">Restaurants</p>
                </div>
                <div>
                  <p className="text-4xl font-extralight text-amber-500 mb-2">
                    365
                  </p>
                  <p className="text-gray-600 tracking-wide">Days of Luxury</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-[0_5px_30px_rgba(0,0,0,0.07)]">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Hotel lobby" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-10 -right-5 bottom-0 left-10 border border-amber-400/50 rounded-lg -z-0"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section - Refined testimonials */}
      <section id="testimonials" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extralight text-center mb-3 tracking-[0.15em] transition-opacity duration-700 ${visibleSections.testimonials ? 'opacity-100' : 'opacity-0'}`}>
            GUEST EXPERIENCES
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-16"></div>
          <div className={`grid md:grid-cols-3 gap-10 transition-all duration-1000 ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-50/70 p-8 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500">
              <div className="flex text-amber-400 mb-5">
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
              </div>
              <p className="text-gray-700 mb-7 italic font-light leading-relaxed tracking-wide">
                "An absolutely breathtaking experience. The attention to detail
                and personalized service made our honeymoon truly unforgettable.
                We'll definitely be returning for our anniversary."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-400/20 mr-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Guest" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-normal tracking-wide">Emily & James</p>
                  <p className="text-sm text-gray-500 tracking-wide">
                    New York, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50/70 p-8 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500">
              <div className="flex text-amber-400 mb-5">
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
              </div>
              <p className="text-gray-700 mb-7 italic font-light leading-relaxed tracking-wide">
                "The Presidential Suite exceeded all expectations. The private
                terrace views are spectacular, and the staff went above and
                beyond to accommodate our requests. Simply world-class."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-400/20 mr-4">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Guest" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-normal tracking-wide">Robert Chen</p>
                  <p className="text-sm text-gray-500 tracking-wide">
                    Singapore
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50/70 p-8 rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500">
              <div className="flex text-amber-400 mb-5">
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
                <StarIcon size={18} />
              </div>
              <p className="text-gray-700 mb-7 italic font-light leading-relaxed tracking-wide">
                "The spa treatments were divine and the infinity pool is exactly
                as gorgeous as the photos suggest. The culinary experience at
                the main restaurant was a highlight of our trip."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-400/20 mr-4">
                  <img src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Guest" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-normal tracking-wide">Sophia Martinez</p>
                  <p className="text-sm text-gray-500 tracking-wide">
                    Madrid, Spain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Plans Button - Refined plans button */}
      <section id="plans-section" className="py-24 px-6 md:px-10 bg-gray-50/70 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extralight text-center mb-3 tracking-[0.15em] transition-opacity duration-700 ${visibleSections.plans ? 'opacity-100' : 'opacity-0'}`}>
            ACCOMMODATION
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-12"></div>
          <button onClick={() => setShowPlans(!showPlans)} className={`flex items-center mx-auto bg-transparent border border-amber-400/80 text-amber-500 px-10 py-3.5 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 text-sm tracking-[0.15em] font-medium mb-8 shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.25)] hover:-translate-y-0.5 active:translate-y-0 ${visibleSections.plans ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {showPlans ? 'HIDE ROOM OPTIONS' : 'VIEW ROOM OPTIONS'}
            <ChevronDownIcon className={`ml-2 transition-transform duration-300 ${showPlans ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>
      {/* Plans Section - Refined plans cards */}
      {showPlans && <section className="py-12 px-6 md:px-10 bg-gray-50/70">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Standard Room */}
              <div className="bg-white rounded-lg overflow-hidden shadow-[0_5px_30px_rgba(0,0,0,0.07)] transition-all duration-500 hover:shadow-[0_15px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Standard Room" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-xs font-medium text-gray-700 shadow-sm tracking-wide">
                    FROM $150/NIGHT
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-light mb-3 tracking-wide">
                    DELUXE ROOM
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm tracking-wide">
                    Perfect for solo travelers or couples seeking comfort with
                    modern amenities.
                  </p>
                  <div className="mb-8 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Queen-sized
                      bed
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Free Wi-Fi
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Smart TV
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Rain shower
                    </div>
                  </div>
                  <button className="w-full bg-white border border-amber-400/80 text-amber-500 py-3 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.25)] hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-[0.15em]">
                    <span>BOOK NOW</span>
                    <ArrowRightIcon size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              {/* Deluxe Suite */}
              <div className="bg-white rounded-lg overflow-hidden shadow-[0_5px_30px_rgba(0,0,0,0.07)] transition-all duration-500 hover:shadow-[0_15px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Deluxe Suite" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-xs font-medium text-gray-700 shadow-sm tracking-wide">
                    FROM $250/NIGHT
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-light mb-3 tracking-wide">
                    LUXURY SUITE
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm tracking-wide">
                    Spacious accommodation with premium amenities for an
                    elevated experience.
                  </p>
                  <div className="mb-8 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> King-sized
                      bed
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Living area
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Free
                      breakfast
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Balcony
                    </div>
                  </div>
                  <button className="w-full bg-white border border-amber-400/80 text-amber-500 py-3 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.25)] hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-[0.15em]">
                    <span>BOOK NOW</span>
                    <ArrowRightIcon size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              {/* Presidential Suite */}
              <div className="bg-white rounded-lg overflow-hidden shadow-[0_5px_30px_rgba(0,0,0,0.07)] transition-all duration-500 hover:shadow-[0_15px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Presidential Suite" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-xs font-medium text-gray-700 shadow-sm tracking-wide">
                    FROM $500/NIGHT
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-light mb-3 tracking-wide">
                    PRESIDENTIAL SUITE
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm tracking-wide">
                    The ultimate luxury experience with exclusive services and
                    amenities.
                  </p>
                  <div className="mb-8 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Multiple
                      bedrooms
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Private
                      terrace
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Personal
                      concierge
                    </div>
                    <div className="flex items-center text-gray-600 tracking-wide">
                      <span className="mr-2 text-amber-500">✓</span> Luxury
                      transfers
                    </div>
                  </div>
                  <button className="w-full bg-white border border-amber-400/80 text-amber-500 py-3 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.25)] hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-[0.15em]">
                    <span>BOOK NOW</span>
                    <ArrowRightIcon size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>}
      {/* Features Section - Refined features */}
      <section id="features" className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extralight text-center mb-3 tracking-[0.15em] transition-opacity duration-700 ${visibleSections.features ? 'opacity-100' : 'opacity-0'}`}>
            HOTEL AMENITIES
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-16"></div>
          <div className={`grid md:grid-cols-4 gap-12 transition-all duration-1000 ${visibleSections.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center group">
              <div className="bg-gray-50/70 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-amber-50 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide">
                Luxury Accommodations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
                Elegantly designed rooms and suites for ultimate comfort.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gray-50/70 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-amber-50 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide">
                Fine Dining
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
                Four restaurants offering diverse culinary experiences.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gray-50/70 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-amber-50 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide">
                Wellness Spa
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
                Rejuvenating treatments and premium facilities.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gray-50/70 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-amber-50 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide">
                Infinity Pools
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
                Stunning pools with panoramic views.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Location Section - Refined location section */}
      <section id="location" className="py-24 px-6 md:px-10 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${visibleSections.location ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-extralight mb-3 tracking-[0.15em]">
                LOCATION
              </h2>
              <div className="w-16 h-px bg-amber-400 mb-10"></div>
              <p className="text-lg mb-8 leading-relaxed text-gray-700 font-light tracking-wide">
                Perfectly situated in the heart of paradise, Hestia's Palace
                offers easy access to both pristine beaches and vibrant city
                life.
              </p>
              <div className="flex items-start mb-8">
                <MapPinIcon size={24} className="text-amber-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-normal mb-1 tracking-wide">
                    Hestia's Palace
                  </p>
                  <p className="text-gray-600 tracking-wide">
                    1234 Luxury Lane
                  </p>
                  <p className="text-gray-600 tracking-wide">
                    Paradise City, PC 12345
                  </p>
                </div>
              </div>
              <div className="flex space-x-6 mb-10">
                <button className="flex items-center text-amber-500 hover:text-amber-600 transition-colors group">
                  <span className="mr-2 tracking-wide">Get Directions</span>
                  <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="flex items-center text-amber-500 hover:text-amber-600 transition-colors group">
                  <span className="mr-2 tracking-wide">Contact Us</span>
                  <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-normal mb-1 tracking-wide">Airport</p>
                  <p className="text-gray-600 tracking-wide">
                    15 minutes by car
                  </p>
                </div>
                <div>
                  <p className="font-normal mb-1 tracking-wide">City Center</p>
                  <p className="text-gray-600 tracking-wide">
                    10 minutes by car
                  </p>
                </div>
                <div>
                  <p className="font-normal mb-1 tracking-wide">Beach</p>
                  <p className="text-gray-600 tracking-wide">Direct access</p>
                </div>
                <div>
                  <p className="font-normal mb-1 tracking-wide">Shopping</p>
                  <p className="text-gray-600 tracking-wide">
                    5 minutes by car
                  </p>
                </div>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${visibleSections.location ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-[0_5px_30px_rgba(0,0,0,0.07)]">
                <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Hotel location map" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                    <div className="bg-white w-3 h-3 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 -right-5 bottom-0 left-10 border border-amber-400/50 rounded-lg -z-0"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer - Refined footer */}
      <footer className="bg-gray-900 text-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-14">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-extralight tracking-[0.15em] mb-8">
                HESTIA'S PALACE
              </h3>
              <p className="mb-8 text-gray-400 max-w-md leading-relaxed font-light tracking-wide">
                Experience unparalleled luxury and comfort in our award-winning
                hotel. From exquisite dining to rejuvenating spa treatments,
                every moment at Hestia's Palace is designed for your pleasure.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-light mb-6 tracking-wide">CONTACT</h3>
              <ul className="space-y-4 text-gray-400 tracking-wide font-light">
                <li>1234 Luxury Lane</li>
                <li>Paradise City, PC 12345</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Email: info@hestiaspalace.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-light mb-6 tracking-wide">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors tracking-wide font-light">
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors tracking-wide font-light">
                    Dining
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors tracking-wide font-light">
                    Spa & Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors tracking-wide font-light">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors tracking-wide font-light">
                    Special Offers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800/50 text-center text-sm text-gray-500">
            <p className="tracking-wide font-light">
              &copy; {new Date().getFullYear()} Hestia's Palace. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
}
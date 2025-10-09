import { useEffect, useRef } from "react";
import { PARTNERS, PARTNER_STATS } from "@/constants/partner.constants";
import { PartnerText } from "@/enums/partner.enums";

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const speed = 1; // pixels per frame

    const scroll = () => {
      if (!isDragging.current) {
        if (scrollContainer.scrollLeft >= scrollWidth - clientWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
    };

    const intervalId = setInterval(scroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  // Drag handlers
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // ---- Mouse Events ----
    const mouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = "grabbing";
    };

    const mouseLeaveOrUp = () => {
      isDragging.current = false;
      scrollContainer.style.cursor = "grab";
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    // ---- Touch Events ----
    const touchStart = (e: TouchEvent) => {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;
    };

    const touchEnd = () => {
      isDragging.current = false;
    };

    const touchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    // Attach listeners
    scrollContainer.addEventListener("mousedown", mouseDown);
    scrollContainer.addEventListener("mouseleave", mouseLeaveOrUp);
    scrollContainer.addEventListener("mouseup", mouseLeaveOrUp);
    scrollContainer.addEventListener("mousemove", mouseMove);

    scrollContainer.addEventListener("touchstart", touchStart);
    scrollContainer.addEventListener("touchend", touchEnd);
    scrollContainer.addEventListener("touchmove", touchMove);

    scrollContainer.style.cursor = "grab";

    return () => {
      scrollContainer.removeEventListener("mousedown", mouseDown);
      scrollContainer.removeEventListener("mouseleave", mouseLeaveOrUp);
      scrollContainer.removeEventListener("mouseup", mouseLeaveOrUp);
      scrollContainer.removeEventListener("mousemove", mouseMove);

      scrollContainer.removeEventListener("touchstart", touchStart);
      scrollContainer.removeEventListener("touchend", touchEnd);
      scrollContainer.removeEventListener("touchmove", touchMove);
    };
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              {PartnerText.SECTION_TITLE}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {PartnerText.SECTION_DESCRIPTION}
          </p>
        </div>

        {/* Auto + Drag Scrolling Partners */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...Array(10)].flatMap(() => PARTNERS).map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 card-elevated p-8 text-center group min-w-[250px]"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {partner.industry}
                </p>
              </div>
            ))}
          </div>

          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Partner Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {PARTNER_STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

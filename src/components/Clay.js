"use client";

export function ClayCard({
  children,
  className = "",
  variant = "default",
  hover = true,
  ...props
}) {
  const variants = {
    default: "bg-cream dark:bg-dark-card",
    peach: "bg-peach dark:bg-dark-card",
    sage: "bg-sage dark:bg-dark-sidebar",
    coral: "bg-coral dark:bg-coral-dark",
    transparent: "bg-transparent",
  };

  return (
    <div
      className={`
        rounded-[28px] p-6
        shadow-clay dark:shadow-clay-dark
        ${variants[variant] || variants.default}
        ${hover ? "transition-all duration-300 hover:shadow-clay-hover hover:-translate-y-0.5" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function ClayButton({
  children,
  className = "",
  variant = "coral",
  size = "md",
  as = "button",
  ...props
}) {
  const variants = {
    coral: "bg-coral text-white hover:bg-coral-dark",
    cream: "bg-cream text-charcoal dark:bg-dark-card dark:text-dark-text hover:bg-cream-dark dark:hover:bg-dark-card-hover",
    sage: "bg-sage text-white hover:bg-sage-dark",
    mustard: "bg-mustard text-charcoal hover:bg-[#D9A458]",
    ghost: "bg-transparent text-charcoal dark:text-dark-text hover:bg-cream/60 dark:hover:bg-dark-card/60",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const Component = as;

  return (
    <Component
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-semibold
        shadow-button
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-button-hover
        active:translate-y-0 active:scale-95 active:shadow-button-active
        cursor-pointer
        ${variants[variant] || variants.coral}
        ${sizes[size] || sizes.md}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}

export function ClayBadge({
  children,
  className = "",
  color = "cream",
}) {
  const colors = {
    cream: "bg-cream dark:bg-dark-card text-charcoal dark:text-dark-text",
    coral: "bg-coral-light/30 text-coral-dark dark:bg-coral/20 dark:text-coral-light",
    sage: "bg-sage-light/30 text-sage-dark dark:bg-sage/20 dark:text-sage-light",
    mint: "bg-mint-light/30 text-[#4A7D50] dark:bg-mint/20 dark:text-mint-light",
    mustard: "bg-mustard-light/30 text-[#A07028] dark:bg-mustard/20 dark:text-mustard-light",
    sky: "bg-sky-light/30 text-[#4A8A89] dark:bg-sky/20 dark:text-sky-light",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5
        rounded-full text-xs font-semibold
        shadow-clay-sm dark:shadow-clay-dark-sm
        ${colors[color] || colors.cream}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export function ClayIconBox({
  children,
  className = "",
  color = "sage",
}) {
  const colors = {
    sage: "bg-sage/20 text-sage-dark dark:bg-sage/15 dark:text-sage-light",
    coral: "bg-coral/15 text-coral dark:bg-coral/15 dark:text-coral-light",
    mint: "bg-mint/20 text-[#4A7D50] dark:bg-mint/15 dark:text-mint-light",
    mustard: "bg-mustard/20 text-mustard dark:bg-mustard/15 dark:text-mustard-light",
    sky: "bg-sky/20 text-[#4A8A89] dark:bg-sky/15 dark:text-sky-light",
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        w-10 h-10 rounded-2xl
        shadow-clay-sm dark:shadow-clay-dark-sm
        ${colors[color] || colors.sage}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

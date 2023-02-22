import clsx from "clsx";

const GlassPane = ({ children, className}): JSX.Element => { // @ts-ignore-7031
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    > 
      {children}
    </div>
  );
};

export default GlassPane;
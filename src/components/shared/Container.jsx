const Container = ({
  noPadding = false,
  style = "",
  className = "",
  children,
}) => {
  return style ? (
    <div
      className={`${
        noPadding ? "" : "px-4 sm:px-8 lg:px-32"
      } ${className} mx-auto`}
      style={style}
    >
      {children}
      {console.log("using style")}
      {console.log(style)}
    </div>
  ) : (
    <div
      className={`${
        noPadding ? "" : "px-4 sm:px-8 lg:px-32"
      } ${className} mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;

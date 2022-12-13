const UiBox = ({ children, tag = 'div', ...props }: any) => {
  const CustomTag = tag;
  return <CustomTag {...props}>{children}</CustomTag>;
};

export default UiBox;

const BlurBall = ({ size = 300, className = "" }) => {
  return (
    <div
      className={`
        absolute rounded-full blur-3xl opacity-15 
        ${className}
      `}
      style={{ width: size, height: size }}
    />
  );
};

export default BlurBall;

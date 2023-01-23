

type ButtonProps = {
  bgColor?: string;
  color?: string;
  size?: string;
  text?: string;
  borderRadius?: string;
}

export default function Button(props: ButtonProps) {
  
  const { bgColor, color, borderRadius, size, text } = props;

  return (
    <button type="button" style={{
      backgroundColor: bgColor,
      color, borderRadius
    }}
      className={`text-${size} p-2`}
    >
      {text}

    </button>
  )
}

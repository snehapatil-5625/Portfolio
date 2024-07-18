import { useStyletron } from "baseui";

export default function Home() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
        color: $theme.colors.primaryA,
        gap: "10px",
      })}
    >
      <div
        className={css({
          fontSize: "80px",
          fontWeight: 600,
          textTransform: "capitalize",
          letterSpacing: "10px",
        })}
      >
        Sneha Patil
      </div>
      <div
        className={css({
          fontSize: "40px",
          textAlign: "left",
          fontWeight: 400,
        })}
      >
        Front-End Developer
      </div>
    </div>
  );
}

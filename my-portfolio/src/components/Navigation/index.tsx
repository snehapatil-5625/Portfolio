import { useStyletron } from "baseui";

const navigation = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "/",
  },
  {
    name: "Projects",
    href: "/",
  },
  {
    name: "Experience",
    href: "/",
  },
];

export default function Naviagtion() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        width: "100%",
        paddingTop: $theme.sizing.scale200,
        paddingBottom: $theme.sizing.scale200,
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        backgroundColor: "#aaaa",
      })}
    >
      {navigation.map((item) => (
        <div className={css({})}>
          <a
            href={item.href}
            className={css({
              color: $theme.colors.primary,
              fontSize: "20px",
              ":hover": {
                color: $theme.colors.mono700,
              },
            })}
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}

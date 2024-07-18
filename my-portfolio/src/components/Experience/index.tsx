import { useStyletron } from "baseui";

export default function Experience() {
  const [css, $theme] = useStyletron();
  return (
    <div
      className={css({
        width: "700px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {jobs.map((job, index) => (
        <div
          key={index}
          className={css({
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "20px",
            position: "relative",
          })}
        >
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              position: "relative",
              marginRight: "20px",
            })}
          >
            <div
              className={css({
                backgroundColor: "#5a5a5a",
                color: "#FFF",
                padding: "5px 10px",
                borderRadius: "4px 0 0 4px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              })}
            >
              {job.year}
            </div>
            <div
              className={css({
                width: 0,
                height: 0,
                borderTop: "17px solid transparent",
                borderBottom: "17px solid transparent",
                borderLeft: "10px solid #5a5a5a",
              })}
            ></div>
          </div>
          <div
            className={css({
              width: "20px",
              height: "20px",
              backgroundColor: "gold",
              borderRadius: "50%",
              position: "relative",
            })}
          ></div>
          <div
            className={css({
              position: "absolute",
              top: "30%",
              bottom: "0",
              left: "10px",
              width: "3px",
              height: "100%",
              backgroundColor: $theme.colors.primary,
              zIndex: 0,
            })}
          ></div>
          <div
            className={css({
              marginLeft: "30px",
            })}
          >
            <div
              className={css({
                fontSize: "20px",
                fontWeight: 700,
                color: $theme.colors.primaryA,
                marginBottom: $theme.sizing.scale200,
              })}
            >
              {job.title}
            </div>
            <div
              className={css({
                fontSize: "18px",
                fontWeight: 400,
                color: $theme.colors.primaryA,
                marginBottom: $theme.sizing.scale200,
              })}
            >
              {job.company}
            </div>
            <div
              className={css({
                fontSize: "16px",
                fontWeight: 400,
                color: $theme.colors.mono800,
              })}
            >
              {job.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const jobs = [
  {
    year: "2021",
    title: "Senior Python Developer",
    company: "Scottech, Toledo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan...",
  },
  {
    year: "2021",
    title: "Python Developer",
    company: "AutoGrid Systems, Naperville",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan...",
  },
];

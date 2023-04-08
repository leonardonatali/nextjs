class TitleProps {
  title: string
  subtitle: string
}

export default function Title (props: TitleProps): JSX.Element {
  return (
    <>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </>
  )
}

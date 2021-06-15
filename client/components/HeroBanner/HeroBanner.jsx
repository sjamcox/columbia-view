export const HeroBanner = ({ button, description, heading, image }) => {
  return (
    <section styles={{ backgroundImage:`url(${image.asset.url})`}}>
      <h2>{ heading }</h2>
      <p>{ description }</p>
      <button>{ button.text }</button>
    </section>
  )
}
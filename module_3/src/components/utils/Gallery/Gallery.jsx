export default function Gallery({ images }) {
  return (
    <section className="flex w-full h-[600px]">
      {images.map(image => (
        <img key={image?.name} className="w-0 flex-grow object-cover opacity-80 duration-500 ease-linear hover:w-40 hover:opacity-100 hover:contrast-[120%]" src={image?.url} alt={image?.name} />
      ))}
    </section>
  )
}

Gallery.defaultProps = {
  images: []
}
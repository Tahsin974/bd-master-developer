const Map = () => {
  return (
    <div className="max-w-[1280px] mx-auto xl:my-20 lg:my-20 md:my-14 sm:my-12 my-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9215206503627!2d90.37058467410294!3d23.821389586049644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c11dce9aa16b%3A0xde189c1211d7c78!2sMedorgan%20Limited!5e0!3m2!1sen!2sbd!4v1745935625507!5m2!1sen!2sbd"
        width="100%"
        height="450"
        className="rounded-3xl"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

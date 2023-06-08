function Container(props: { children: React.ReactNode }) {
  return (
    <section className='max-w-[1200px] mx-auto flex flex-col items-center'>{props.children}</section>
  );
}

export default Container;

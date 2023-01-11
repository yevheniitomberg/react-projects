function Wrapper(props) {
  return <div style={{ backgroundColor: props.color }}>{props.children}</div>
}

export default Wrapper

const formatCEP = (props) => {
  const formatedCEP = props.slice(0, 5) + "-" + props.slice(5)

  return formatedCEP;
}

export default formatCEP;
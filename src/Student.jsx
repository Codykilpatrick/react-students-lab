import Score from "./Score";

const Student = (props) =>{
  console.log(props);
  return (
    <>
    <h2>{ props.student.name }</h2>
    <h4>{ props.student.bio }</h4>
    { props.student.scores.map(score => 
      <Score score={ score }/>) }
    </>
  )
}

export default Student
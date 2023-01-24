import Student from "./Student";

const StudentList = (props) => {
  return (
  <>
    {props.students.map(student =>
      <Student student={student} />)}
  </>
  )
}

export default StudentList
import "./Student.css"
const students = [{
    id:1,
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
},
    {
        id:2,
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        id:3,
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        id:4,
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        id:5,
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        id:6,
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]
function Student(){
  return(
    <>
    <table>
        <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        </tr>
     
        {students.map(students =>(
            <tr key={students.id}>
                <td>{students.company}</td>
                <td>{students.contact}</td>
                <td>{students.country}</td>
            </tr>
        ))}
    </table>
    </>
  )

}
export default Student;
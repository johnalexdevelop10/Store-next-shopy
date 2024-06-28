interface CategoryProps{
  paramas:{
    categories:string[]
  }
}

export default function Category(props:CategoryProps){
  const {categories}= props.paramas
  return(
<h1>categoria dinamicas:{categories}</h1>
  )
}
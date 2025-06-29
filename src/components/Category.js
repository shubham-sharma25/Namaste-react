const Category = ({data}) => {
    const {title, itemCards} = data || {};
    alert('title: ' + title);
return (
    <div className="text-center p-4">
      <h1 className="font-bold m-4 p-4">{title}</h1>
      <p className="font-bold">This is a category page</p>
    </div>
)
}
export default Category
const withPromotedLabel = (Restaurant) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-4 p-2 rounded-lg">Promoted</label>
                <Restaurant {...props}/>
            </div>
        )
    }
}
export default withPromotedLabel
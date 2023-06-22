import { Button } from "react-bootstrap";

const FilterButton = () => {
    return (
      
        <Button variant="outline-primary">
        <span className="visually-hidden">Show </span>
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
      </Button>

    )
}
export default FilterButton;
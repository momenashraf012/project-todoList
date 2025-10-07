
import Button from "../components/ui/Button";

const TodoList = () => {
  return (
    <div className=" space-y-3">


      <div className="flex justify-between items-center">
        <h1 className="text-lg">title</h1>
        <div className="flex gap-2">
          <Button>Edit</Button>
          <Button>Cancel</Button>
        </div>
      </div>

       <div className="flex justify-between items-center">
        <h1 className="text-lg">title</h1>
        <div className="flex gap-2">
          <Button>Edit</Button>
          <Button>Cancel</Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-lg">title</h1>
        <div className="flex gap-2">
          <Button>Edit</Button>
          <Button>Cancel</Button>
        </div>
      </div>



    </div>
  );
};

export default TodoList;

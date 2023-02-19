const AdminCard = () => {
  return (
    <div className="flex flex-col min-w-52 p-2 rounded-md border border-gray-50/50">
      <div>
        <h4 className="font-medium text-center">Name of Admin</h4>
        <div className="flex items-center gap-1">
          <span className="font-bold text-sm">country</span>:{" "}
          <span className="text-sm ml-1">country</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold text-sm">email</span>:{" "}
          <span className="text-sm ml-1">admin.email@email.com</span>
        </div>
      </div>
      <button className="p-1 mt-2 font-bold bg-red-500 text-white rounded ring-1 ring-red-500 hover:bg-transparent hover:text-gray-900 transition-all">
        Delete
      </button>
    </div>
  );
};

export default AdminCard;

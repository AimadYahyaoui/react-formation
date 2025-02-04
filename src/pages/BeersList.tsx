import { Link } from "react-router";
import { deleteBeer, getBeers } from "../services/beers.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Beer } from "../schemas/beer.schema";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const BeersList = () => {
  const { data: beers } = useQuery<Beer[]>({
    queryKey: ["beers"],
    queryFn: getBeers,
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deleteBeer(id),
    onMutate: (id: string) => {
      const oldCache = queryClient.getQueryData<Beer[]>(["beers"]);

      queryClient.setQueryData<Beer[]>(["beers"], (oldBeers) => {
        return oldBeers?.filter((beer) => beer._id !== id);
      });
      return { oldCache };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["beers"],
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<Beer[]>(["beers"], context?.oldCache);
    },
  });

  const actionBodyTemplate = (rowData: Beer) => {
    return (
      <div>
        <Link to={`/beers/update/${rowData._id}`}>
          <i className="pi pi-pencil" style={{ fontSize: "2.5rem" }}></i>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <Link to="/beers/create">Create Beer</Link>
      <h1>Beers List</h1>
      <DataTable value={beers} tableStyle={{ minWidth: "50rem" }}>
        <Column field="degree" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="producer" header="Category"></Column>
        <Column field="description" header="Quantity"></Column>
        <Column field="country" header="Quantity"></Column>
        <Column body={actionBodyTemplate} header="action"></Column>
      </DataTable>
    </div>
  );
};

export default BeersList;

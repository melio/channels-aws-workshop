import { useState } from "react";
import { JsonEditor as Editor } from "jsoneditor-react";
import "./App.css";
import "jsoneditor-react/es/editor.min.css";
import Button from "@mui/material/Button";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function saveJson(json: JSON) {
  //save JSON here
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Error!"), 300)
  );
}

async function getJson() {
  //get JSON here
  return {
    id: 3,
    info: { name: "David" },
  };
}

const queryClient = new QueryClient();

function Root() {
  const queryClient = useQueryClient();
  const [json, setJson] = useState();
  const { isLoading, isFetching } = useQuery(["json"], getJson, {
    onSuccess: setJson,
  });
  const mutation = useMutation(saveJson, {
    onError: (e: Error) => {
      toast.error(e.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["json"]);
    },
  });
  if (isLoading || isFetching || !json) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>
        <Editor value={json} onChange={setJson} />
      </div>
      <div>
        <Button
          disabled={mutation.isLoading}
          onClick={() => mutation.mutate(json)}
          variant="contained"
          style={{ margin: "15px 0" }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

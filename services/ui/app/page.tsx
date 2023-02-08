"use client";
import styles from "./page.module.css";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_ROCKET_MUTATION, GET_ROCKETS_QUERY } from "@/app/page.graphql";
import { ChangeEvent, useCallback, useState } from "react";

export default function Home() {
  const { data, refetch } = useQuery(GET_ROCKETS_QUERY);
  const [createRocketMutation] = useMutation(CREATE_ROCKET_MUTATION);

  const [rocketName, setRocketName] = useState<string | undefined>(undefined);
  const [rocketYear, setRocketYear] = useState<number | undefined>(undefined);

  const handleRocketYearChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event?.target?.value) return;
      setRocketYear(parseInt(event.target.value));
    },
    []
  );

  const handleRocketNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event?.target?.value) return;
      setRocketName(event.target.value);
    },
    []
  );

  const handleCreateRocket = useCallback(async () => {
    if (!rocketYear || !rocketName) return;
    try {
      const {errors} = await createRocketMutation({
        variables: { year: rocketYear, name: rocketName },
      });
      refetch();
      if (!errors?.length) {
        alert("Successfully added rocket to db.");
      }
    } catch (error) {
      console.error(error);
    }
  }, [refetch, rocketName, rocketYear]);

  return (
     <main className={styles.main}>
       <h1>GraphQL data</h1>
       <div className={styles.description}>
         There are {data?.allRockets?.nodes.length ?? 0} rockets in the
         database
         <ul>
           <div>Name, Year</div>
           {data?.allRockets?.nodes.map((rocket) => (
               <li key={rocket?.id}>{`${rocket?.name}, ${rocket?.year}`}</li>
           ))}
         </ul>
         <div>
           <label>Rocket name</label>
           <input type="text" onChange={handleRocketNameChange} />
           <label>Rocket year</label>
           <input type="number" onChange={handleRocketYearChange} />
           <button onClick={handleCreateRocket}>Store in db</button>
         </div>
       </div>

     </main>
  );
}

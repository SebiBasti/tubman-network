import clientPromise from '../lib/mongodb'
import { connectToDatabase } from "../util/mongodb"

export default function MongoDBTest({ isConnected, movies }) {

  return (
    <>
      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
          for instructions.
        </h2>
      )}
      <div>
        <h1>Top 20 Movies of All Time</h1>
        <p>
          <small>(According to Metacritic)</small>
        </p>
        <ul>
          {movies.map((movie) => (
            <li>
              <h2>{movie.title}</h2>
              <h3>{movie.metacritic}</h3>
              <p>{movie.year}</p>
              <p>{movie.plot}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ year: 1 })
    .limit(20)
    .toArray();

  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: {
        isConnected: true,
        movies: JSON.parse(JSON.stringify(movies))
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
import { GetServerSideProps } from 'next';

export default function userHandler(req, res) {
    const {
      query: { id, name },
      method,
    } = req
  
    switch (method) {
      case 'GET':
        // Get data from your database
        res.status(200).json({ id, name: `User ${id}` })
        break
      case 'PUT':
        // Update or create data in your database
        res.status(200).json({ id, name: name || `User ${id}` })
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }

  export const getServerSideProps: GetServerSideProps = async () => {

    const res = await fetch('https://api.thedogapi.com/v1/breeds')
    const data = await res.json()
    console.log(data[0]);
    return { props: {data}}
    
  }
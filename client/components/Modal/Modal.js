export default function Modal(props) {
  return (
      <div className='flex justify-center'>
          <div>
              <div>
                  {props.children}
              </div>
          </div>
      </div>
  )
}
interface Props {
    children: string
    color?: 'primary' | 'secondary' | 'danger'
    onClinck: () => void
}

const Button = ({children, color="danger", onClinck}:Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClinck}>{children}</button>
  )
}

export default Button


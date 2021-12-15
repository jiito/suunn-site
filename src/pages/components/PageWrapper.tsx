export const PageWrapper: React.FC = ({ children }) => {
  return (
    <>
      <div className="h-full pb-20 bg-gradient-to-t from-yellow-100">
        {children}
      </div>
    </>
  )
}

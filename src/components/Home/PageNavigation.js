export function PageNavigation(props) {
  return (
    <ul className="pagination justify-content-center">
      <li className={"page-item " + (props.page > 1 ? "" : " disabled")}>
        <button
          className="page-link"
          href="#"
          tabIndex="-1"
          onClick={props.moveToPrevPage}
        >
          Previous
        </button>
      </li>
      <li
        className={
          "page-item " + (props.page < props.totalNumOfPages ? "" : " disabled")
        }
      >
        <button className="page-link" href="#" onClick={props.moveToNextPage}>
          Next
        </button>
      </li>
    </ul>
  );
}

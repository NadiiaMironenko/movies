import s from "./CastList.module.css"

export default function CastList({ casts }) {
  return (
    <>
      <ul >
        {casts &&
          casts.map((cast) => {
            const { id, original_name, profile_path } = cast;

            return (
              <li className={s.castList} key={id}>
                <img 
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt="profile" width="400px"
                />
                <p>{original_name}</p>
              </li>
            );
          })}
      </ul>
      <span>And Others...</span>
    </>
  );
}

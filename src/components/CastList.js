

export default function CastList({ casts }) {
  return (
    <>
      <ul>
        {casts &&
          casts.map((cast) => {
            const { id, original_name, profile_path } = cast;

            return (
              <li  key={id}>
                <img
                  src={ `https://image.tmdb.org/t/p/original${profile_path}`
                  }
                  alt="profile"
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

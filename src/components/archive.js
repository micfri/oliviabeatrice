<div className="col-lg-12">
  <div className="row end-xs">
    <div className="row col-lg-4 end-xs middle-xs fullheight">
      <div className="row fullheight  photoMenu middle-xs">
        <Switch>
          <Route exact path='/photo/' render={(props) => <TitleItem {...props} page='photo' />} />
          <Route path='/photo/photos/' render={(props) => <TitleItem {...props} page='foto' />} />
          <Route path='/photo/films/' render={(props) => <TitleItem {...props} page='films' />} />
        </Switch>
      </div>
    </div>
  </div>

  function TitleItem(props) {
    if(props.page == 'foto') {
      return (
        <div className="row middle-xs">
          <a href="/#/photo/photos/"><div className="photoMenuItem activePMI"><p>Foto</p></div></a>
          <a href="/#/photo/films/"><div className="photoMenuItem"><p>Film</p></div></a>
        </div>

      )
        } else if (props.page == 'films') {
      return (
        <div className="row middle-xs">
          <a href="/#/photo/photos/"><div className="photoMenuItem"><p>Foto</p></div></a>
          <a href="/#/photo/films/"><div className="photoMenuItem activePMI"><p>Film</p></div></a>
        </div>
      )

    } else if (props.page == 'photo') {
        return (
          <div className="row middle-xs">
            <a href="/#/photo/photos/"><div className="photoMenuItem"><p>Foto</p></div></a>
            <a href="/#/photo/films/"><div className="photoMenuItem"><p>Film</p></div></a>
          </div>
        )


    }
    return <p>hej</p>;


  };

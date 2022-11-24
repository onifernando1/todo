const ViewProject = ((project) => {
  const view = function (project) {
    const ptitle = project.title;
    console.log(ptitle);
  };

  return { view };
})();

export { ViewProject };

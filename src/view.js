const View = ((project) => {
  const viewProject = function (project) {
    const ptitle = project.title;
    console.log(ptitle);
  };

  return { viewProject };
})();

export { View };

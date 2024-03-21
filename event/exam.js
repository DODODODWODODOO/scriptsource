document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const criteria = document.querySelector("#criteria");
  const keyword = document.querySelector("#keyword");

  console.log(criteria.value);

  if (criteria.value == "검색 조건 선택") {
    alert("조건을 선택해 주세요");
    criteria.focus();
    return;
  } else if (!keyword.value) {
    alert("검색어를 확인해 주세요");
    keyword.focus();
    return;
  }
  e.target.submit();
});

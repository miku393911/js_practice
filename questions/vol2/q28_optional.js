// Q28. オブジェクト `apiResponse` の深い階層にある `data.user.name` プロパティにアクセスしたいですが、途中のプロパティが存在しない可能性があります。
// エラーを起こさずに安全にアクセスし、存在しない場合は `undefined` となるように記述してください。
const apiResponse = { status: 200}; // data プロパティがない
// オプショナルチェーン (`?.`) を使用して、`apiResponse` オブジェクトの `data.user.name` プロパティに安全にアクセスし、結果を `userNameFromApi` に代入してください。
const userNameFromApi = apiResponse?.data?.user?.name;
console.log(userNameFromApi); // Expected: undefined
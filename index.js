request.interceptors.response.use(async (response) => {
  // 返回数据不是对象，是加密字符串情况下，无法解析成data，response对象中也没有data，有点奇葩，response对象中是不是应该加入接口返回的数据
  const data = await response.clone().json()
  return response
})

<template>
  <div class = "body">
    <div class = "body-top">
      <div class = "login">
        <div class = "login-input">
          <div class = "login-user-name">
            <label class = "input-label">login</label>
            <input class = "login-input-text">
          </div>
          <div class = "login-user-password">
            <label class = "input-label">password</label>
            <input class = "login-input-text">
          </div>
        </div>
        <div class = "login-component">	
          <div class = "remember">remember me</div>
          <div class = "unchecked" id = "remember_uncheck" onclick = "checked(true)"></div>		
          <div class = "checked" id = "remember_check" onclick = "checked(false)"></div>	
          <div class = "clear"></div>			
          <div class = "btn-login">Sign in</div>					
        </div>
      </div>
      <div class = "ad-pic">   
      </div>
    </div>
    <div class = "clear"></div>
    <div class = "body-content">        
        <div class = "news" v-for="index in 11">
          <div class = "news-image"></div>
          <div class = "news-title">{{news_title}}</div>
        </div>
        <div class = "clear"></div>

      <div class = "loading">					
						<div class = "loading-img"></div>
            <div class = "loading-text">Loading...</div>          					
				</div>
				<div class = "clear"></div>
    </div>
  </div>
</template>

<script>
module.exports = {
		created: function(){	
      					
		},
    data: function(){
      return {
        news_title: 'New Title',	        
      }
    }
}
</script>
<!-- styling for the component -->
<style>

</style>
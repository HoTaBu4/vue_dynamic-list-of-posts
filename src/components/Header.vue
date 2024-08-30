<script>
  export default {
    props:{
      userData : {
        type: String,
      },
      setUserData : {
        type: Function,
      }
    },
  }
</script>

<template>
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-item">
      <h2 className=" title is-size-4">Vue List Of Posts</h2>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <div className="mr-5 mb-2">
            <p>User: {{ userData.name }}</p>
          </div>

          <a 
            className="button is-light"
            @click="this.setUserData(null)"
          > 
            Logout
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
</style>
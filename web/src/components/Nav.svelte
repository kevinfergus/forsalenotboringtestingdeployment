<script>
    import { onMount  } from "svelte";

        // Show mobile icon and display menu
        let showMobileMenu = false;

        // List of navigation items
      const navItems = [
              { label: "Homes", href: "/homes"  },
              { label: "About", href: "/about"  },
        ];

        // Mobile menu click event handler
        const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

        // Media match query handler
      const mediaQueryHandler = e => {
              // Reset mobile state
          if (!e.matches) {
                    showMobileMenu = false;
                  
            }
            
        };

        // Attach media query listener on mount hook
      onMount(() => {
              const mediaListener = window.matchMedia("(max-width: 767px)");

              mediaListener.addListener(mediaQueryHandler);
            
        });
</script>

<nav>
    <div class="inner">
          <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
                  <div class="middle-line"></div>
                  <div class="mobile-logo">
                  <a href="." class="logo">For Sale Not Boring</a>
                  </div>
                      </div>
                          <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
                            <li class="logo"><a href=".">For Sale Not Boring</a></li>   
                                  {#each navItems as item}
                                            <li>
                                                        <a href={item.href}>{item.label}</a>
                                                                </li>
                                                                      {/each}
                                                                          </ul>
                                                                            </div>
</nav>

<style>
  nav {
    position: fixed;
    margin-bottom: 1em;
    width: 100%;
        background-color: #de4545;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                height: 45px;
                z-index: 4444;
                top: 0;
  }

  .inner {
        max-width: 980px;
            padding-left: 20px;
                padding-right: 20px;
                    margin: auto;
                        box-sizing: border-box;
                            display: flex;
                                align-items: center;
                                    height: 100%;
                                      
  }

  .mobile-icon {
        width: 25px;
            height: 14px;
                position: relative;
                    cursor: pointer;
                      
  }

    .mobile-icon:after,
      .mobile-icon:before,
      .middle-line {
            content: "";
                position: absolute;
                    width: 100%;
                        height: 2px;
                            background-color: #fff;
                                transition: all 0.4s;
                                    transform-origin: center;
                                      
      }

        .mobile-icon:before,
        .middle-line {
              top: 0;
                
        }

          .mobile-icon:after,
          .middle-line {
                bottom: 0;
                  
          }

          .mobile-icon:before {
                width: 66%;
                  
          }

          .mobile-icon:after {
                width: 33%;
                  
          }

          .middle-line {
                margin: auto;
                  
          }

            .mobile-icon:hover:before,
              .mobile-icon:hover:after,
                .mobile-icon.active:before,
                  .mobile-icon.active:after,
                  .mobile-icon.active .middle-line {
                        width: 100%;
                          
                  }

                    .mobile-icon.active:before,
                    .mobile-icon.active:after {
                          top: 50%;
                              transform: rotate(-45deg);
                                
                    }

                    .mobile-icon.active .middle-line {
                          transform: rotate(45deg);
                            
                    }

                    .navbar-list {
                          display: none;
                              width: 100%;
                                  justify-content: flex-end;
                                      margin: 0;
                                          padding: 0 40px;
                                            
                    }

                    .navbar-list.mobile {
                          background-color: #de4545;
                              position: fixed;
                                  display: block;
                                      height: calc(100% - 45px);
                                          bottom: 0;
                                              left: 0;
                                              z-index:9999;
                                                
                    }

                    .navbar-list li {
                          list-style-type: none;
                              position: relative;
                                
                    }

                    .navbar-list li:before {
                          content: "";
                              position: absolute;
                                  bottom: 0;
                                      left: 0;
                                          width: 100%;
                                              height: 1px;
                                                  background-color: transparent;
                                                    
                    }

                    .navbar-list a {
                          color: #fff;
                              text-decoration: none;
                                  display: flex;
                                      height: 45px;
                                          align-items: center;
                                              padding: 0 10px;
                                                  font-size: 1.5em;
                                                  font-weight: 600;
                                                    
                    }

                    @media only screen and (min-width: 767px) {
                      .nav {
                        postition: relative;
                      }
                      .mobile-icon {
                              display: none;
                                  
                      }

                      .navbar-list {
                              display: flex;
                                    padding: 0;
                                        
                      }

                      .navbar-list a {
                              display: inline-flex;
                                  
                      }
                        
                    }
                    .logo {
                      align-self: flex-start;
                      margin-right: auto;
                    }
                    .logo a {
                      font-weight: 600;
                      font-size: 2em;
                    }
</style>

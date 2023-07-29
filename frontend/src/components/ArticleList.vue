<template>
  <section class="u-section news" id="s3">
    <div class="l-container">
      <h2 class="u-section__title">
        Lista de publicações
      </h2>

      <h3>
        Mostrando <b>{{ perPage * page }}</b> de <b>{{ totalContent }}</b> para
        o tema: <b>{{ query }}</b>
      </h3>

      <div v-if="articles && articles.length > 0">
        <div class="news__posts l-flex">
          <a
            v-for="(article, index) in articles"
            :key="index"
            class="news__card"
            href="javascript:void(0)"
          >
            <span>{{ article.title }}</span>
            <p>
              {{ article.description }}
            </p>

            <small
              >Author: <b>{{ article.author }}</b></small
            >
          </a>
        </div>

        <div class="l-flex u-justify-content-center">
          <button
            v-if="page <= totalPages"
            @click="loadMore()"
            class="c-button c-button--primary"
          >
            Ver mais
          </button>
        </div>
      </div>

      <div class="news__notfound" v-else>
        <span
          >Nenhum conteúdo encontrado para a pesquisa : <b>{{ query }}</b></span
        >
      </div>
      <div class="overlay"></div>
    </div>
  </section>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      page: 1,
      perPage: 20,
      totalPages: 0,
      totalContent: 0,
      query: "Netflix",
      articles: [],
      backendEndpoint: "http://localhost:3001/api"
    }
  },
  mounted() {
    this.emitter.on("search", query => {
      this.query = query
      this.search()
    })
    this.getArticles().then(
      result => {
        this.articles = result.data.data.articles
        this.totalContent = result.data.data.totalResults
        this.totalPages = this.totalContent / this.perPage
      },
      error => {
        console.log(error)
        // Handle with error
      }
    )
  },
  methods: {
    /*------------------
    Get Articles content
    -------------------*/
    getArticles() {
      return axios.get(
        `${this.backendEndpoint}/article?q=${this.query}&page=${this.page}`
      )
    },
    /*------------------
    Load more content
    -------------------*/
    loadMore() {
      this.page++
      this.getArticles().then(
        result => {
          this.articles = this.articles.concat(result.data.data.articles)
        },
        error => {
          console.log(error)
          // Handle with error
        }
      )
    },
    /*------------------
    Search a specific content
    -------------------*/
    search() {
      this.page = 1
      this.getArticles().then(
        result => {
          this.articles = result.data.data.articles
          this.totalContent = result.data.data.totalResults
          this.totalPages = this.totalContent / this.perPage
        },
        error => {
          console.log(error)
          // Handle with error
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  button {
    background-color: #fff;
    border: 2px solid black;
    color: black;
    font-weight: 700;
    margin: 5rem;
  }
  p {
    text-align: left;
  }
  &__notfound {
    text-align: center;
    margin-top: 5%;
  }
  &__posts {
    margin-top: 1.5rem;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 5rem;
    border-radius: 30px;
  }
  &__card {
    border-radius: 5px;
    width: 100%;
    position: relative;
    padding: 30px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    &:hover .c-news__thumb img {
      transform: scale(1.1);
    }
    span {
      font-weight: 700;
      display: block;
      z-index: 1;
      color: black;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    small {
      display: block;
      margin-top: 1rem;
      b {
        color: rgba(19, 161, 147, 0.705);
      }
    }
  }
  @media screen and (min-width: 1050px) {
    &__posts {
      margin-top: 2rem;
    }
    &__card {
      width: 45%;
      transition: all 0.5s ease;
      &:hover {
        transition: all 0.5s ease;
        transform: translateY(-5px);
      }
    }
  }
}
</style>

<template>
  <div>
    <div v-if="collectionLayout === 'basic'">
      <v-list dense role="group">
        <v-list-item
          v-for="(item, i) in filteredCollection"
          :key="i"
          :href="fileLink(`${ API }/reporter-letters/`, item)"
          class="pa-0"
          target="_blank"
          role="link"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="secondary--text text-body-1 text-wrap text-decoration-underline onrr-link-pdf"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="text-center">
        <a :href="viewAllLink" class="usa-button">View All Reporter Letters</a>
      </div>
    </div>
    <div v-if="collectionLayout === 'full'">
      <v-card>
        <v-data-table
            :headers="headers"
            :items="collection"
            item-key="title"
            class="onrr-data-table">
            <template v-slot:top>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <MultipleSelectField :fields="topicsInputField"></MultipleSelectField>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <TextField :fields="titleInputField"></TextField>
                        </v-col>
                    </v-row>
                </v-container>
            </template>
            <template v-slot:[`header.title`]="{ header }">
              <div class="text-h6 text-capitalize">{{ header.text}}</div>
          </template>
          <template v-slot:[`header.date`]="{ header }">
              <span class="text-h6 text-capitalize">{{ header.text }}</span>
            </template>
            <template v-slot:[`header.topics`]="{ header }">
                <div class="text-h6 text-capitalize">{{ header.text }}</div>
            </template>
            <template v-slot:[`item.title`]="{ item }">
              <th>
                <div>
                  <a :href="fileLink(`${ API }/reporter-letters/`,item)" target="_blank" :class="['link-item', fileIconClass(item.file.filename_download)]">{{ item.title }}</a>
                </div>
                <div v-if="item.accessible_file">
                  <a :href="accessibleFileLink(`${ API }/reporter-letters/`, item)" target="_blank" :class="['link-item', fileIconClass(item.accessible_file.filename_download)]">{{ item.accessible_file.title }}</a>
                </div>
              </th>
            </template>
            <template v-slot:[`item.date`]="{ item }">
            {{formatNiceDate(item.date)}}
            </template>
            <template v-slot:[`item.topics`]="{ item }">
                {{ getTopics(item.topics) }}
            </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
import {
  fileCollectionMixin,
  dateMixin,
  iconMixin
} from '@/mixins'
import { formatToSlug } from '@/js/utils'
const MultipleSelectField = () => import(/* webpackChunkName: "MultipleSelectField" */ '@/components/inputs/MultipleSelectField')
const TextField = () => import(/* webpackChunkName: "TextField" */ '@/components/inputs/TextField')

export default {
  name: 'ReporterLettersCollection',
  mixins: [fileCollectionMixin, dateMixin, iconMixin],
  data: () => ({
    API: process.env.VUE_APP_API_URL,
    titleInputField: {
      label: 'Search',
      text: '',
      ref: 'searchInput',
      color: 'secondary',
      icon: 'mdi-magnify',
    },
    topicsInputField: {
      items: [],
      label: 'All Topics',
      ref: 'topicSelectInput',
      selected: null,
      color: 'secondary',
      icon: 'mdi-chevron-down',
      params: 'topic'
    },
    filteredByTopicCollection: null,
  }),
  props: {
    collection: [Array, Object],
    collectionName: String,
    collectionLayout: String,
    collectionTopics: Array,
  },
  components: {
    MultipleSelectField,
    TextField,
  },
  methods: {
    getTopics(topicsArr) {
      let topics
      if(topicsArr.length > 1) {
        topics = topicsArr.join(', ')
      } else {
        topics = topicsArr[0]
      }
      return topics
    },
    topicList() {
      let topicArr = []
      this.collection.map(item => {
        if (item.topics && item.topics.length > 0) {
          item.topics.map(topic => {
            if (!topicArr.includes(topic)) {
              topicArr.push(topic)
            }
          })
        } else if (!topicArr.includes(item)) {
            topicArr.push(item)
        }

      })

      this.topicsInputField.items = [...topicArr.sort()]
    },
    titleFilter(value) {
      if (!this.titleInputField.text) {
        return true
      }

      return value.toLowerCase().includes(this.titleInputField.text.toLowerCase())
    },
    topicsFilter(value) {
        if (!this.topicsInputField.selected ||
          this.topicsInputField.selected === null ||
          this.topicsInputField.selected.length === 0) {
            return true
        }

        return value.some(item => this.topicsInputField.selected.indexOf(item) >= 0)
    },
    addParamsToLocation(params) {
      const query = { path: this.$route.fullPath, ...this.$route.query, query: params }
      this.$router.push(query).catch(() => {})
    },
    formattedLabel(label) {
      return formatToSlug(label)
    },
    filterCollectionByTopic() {
      return this.collectionTopics.map(topic => this.collection.filter(({ topics }) => topics.includes(topic)))
    }
  },
  computed: {
    headers()  {
      return [
        {
          text: 'Reporter Letters',
          align: 'start',
          sortable: false,
          value: 'title',
          filter: this.titleFilter,
        },
        {
          text: 'Date',
          align: 'start',
          sortable: true,
          value: 'date'
        },
        {
          text: 'Topics',
          align: 'start',
          sortable: false,
          value: 'topics',
          filter: this.topicsFilter,
        }
      ]
    },
    filteredCollection() {
      const collection = (this.filteredByTopicCollection && this.filteredByTopicCollection.length > 0) 
        ? this.filteredByTopicCollection[0].slice(0, 5) 
        : this.collection && this.collection.slice(0, 5)
      return collection
    },
    viewAllLink() {
      const link = (this.filteredByTopicCollection) ? `/references/reporter-letters?topic=${  encodeURIComponent(this.collectionTopics.join(',')) }` : `/references/reporter-letters`
      return link
    }
  },
  created() {
    setTimeout(function () {
      this.topicList()
      this.filteredByTopicCollection = this.filterCollectionByTopic()
    }.bind(this), 500)
  },
  mounted() {
    const topics = this.$route.query.topic && this.$route.query.topic.split(',')
    this.topicsInputField.selected = topics || null
  }
}
</script>

<style lang="scss" scoped>
.v-card__title {
  align-items: flex-start;
}

.v-list-item--active:before {
  opacity: 0;
  background-color: none;
}

.v-list-item--link:before {
  background-color: none;
}

.link-item {
  word-break: break-all;
}
</style>

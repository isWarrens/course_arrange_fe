<template>
  <Row>
    <Col span="10" offset="7">
      <div class="container">
        <div class="nav" style="margin-top: 10px;margin-bottom: 10px">
            <Row>
              <Col :xs="{ span: 5,offset: 1}" :lg="{ span: 6, offset: 1 }" >
                <Select v-model="model11" filterable>
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </Col>
              <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <Select v-model="model12" filterable multiple>
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </Col>
              <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <ButtonGroup>
                  <Button type="primary" icon="ios-skipbackward">上个月</Button>
                  <Button type="primary" icon="ios-skipforward">下个月</Button>
                </ButtonGroup>
              </Col>
            </Row>
        </div>
        <Table stripe :columns="columns1" :data="data1" id="table"></Table>
      </div>
    </Col>
  </Row>
</template>

<script>
    export default {
      name: "view_timetable",
      data () {
        return {
          cityList: [
            {
              value: 'New York',
              label: 'New York'
            },
            {
              value: 'London',
              label: 'London'
            },
            {
              value: 'Sydney',
              label: 'Sydney'
            },
            {
              value: 'Ottawa',
              label: 'Ottawa'
            },
            {
              value: 'Paris',
              label: 'Paris'
            },
            {
              value: 'Canberra',
              label: 'Canberra'
            }
          ],
          model11: '',
          model12: []
        }
      }

    }
</script>
<style scoped>
  .container{
    width: 100%;
    margin: 0 auto;
  }
</style>

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'UPGO-G1工作室',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        UPGO-G1主要负责兴趣电商直播及短视频项目基础运营、策划、付费引流业务。
      </>
    ),
  },
  {
    title: 'UPGO-G2工作室',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        UPGO-G2工作室主要负责Open AI和Video Engineering渲染远程支持及其他信息技术开发工作
      </>
    ),
  },
  {
    title: 'PUPGO-G3工作室',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        UPGO-G2工作室负责商务合作洽谈及私域矩阵渠道维护工作
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
